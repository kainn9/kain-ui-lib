package main

import (
	"bufio"
	"log"
	"os"
	"strings"

	"github.com/manifoldco/promptui"
)

func main() {
	log.Println("Component Helper!")

	componentsPath := "../src/components"
	componentType := getComponentTypePrompt()
	componentName := getComponentNamePrompt(componentType)
	componentFolder := componentType + "s"

	addComponentTypeLevelExport(componentsPath+"/"+componentFolder+"/index.ts", componentName)

	createComponentFolderAndRootFiles(componentsPath, componentFolder, componentName)

}

func getComponentTypePrompt() string {
	prompt := promptui.Select{
		Label: "What type of component are you building?",
		Items: []string{"atom", "molecule", "organism"},
	}

	_, result, err := prompt.Run()

	if err != nil {
		log.Fatalf("Something went wrong %v\n", err)
	}

	return result
}

func getComponentNamePrompt(componentType string) string {
	label := "What would you like to name your " + componentType + " component?"
	prompt := promptui.Prompt{
		Label: label,
	}

	result, err := prompt.Run()

	if err != nil {
		log.Fatalf("Something went wrong %v\n", err)
	}

	return result
}

func addComponentTypeLevelExport(filePath string, componentName string) {
	file, err := os.OpenFile(filePath, os.O_APPEND|os.O_WRONLY, 0644)

	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}

	defer file.Close()

	content := "export * from " + "\"" + "./" + componentName + "\"" + "\n\n"

	data := []byte(content)

	_, err = file.Write(data)

	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}

}

func createComponentFolderAndRootFiles(filePath string, componentFolder string, componentName string) {
	rootDir := filePath + "/" + componentFolder + "/" + componentName
	err := os.MkdirAll(rootDir, 0755)
	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}

	indexFile, err := os.Create(rootDir + "/" + "index.ts")
	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}
	defer indexFile.Close()

	componentFile, err := os.Create(rootDir + "/" + componentName + ".tsx")
	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}
	defer componentFile.Close()

	scssFile, err := os.Create(rootDir + "/" + strings.ToLower(componentName[:1]) + componentName[1:] + ".scss")
	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}
	defer scssFile.Close()

	indexWriter := bufio.NewWriter(indexFile)
	_, err = indexWriter.WriteString("export * from \"./" + componentName + "\"\n")
	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}
	indexWriter.Flush()

	componentContent := "import { type FC } from \"react\"\n"
	componentContent += "import { uiWrapper } from \"../../../hoc/uiWrapper\"\n"
	componentContent += "import \"./" + strings.ToLower(componentName[:1]) + componentName[1:] + ".scss\"\n\n"
	componentContent += "const " + componentName + ": FC = () => {\n"
	componentContent += "  return <h2>Hello World!</h2>\n}\n\n"
	componentContent += "const wrapped" + componentName + " = uiWrapper(" + componentName + ")\n\n"
	componentContent += "export { wrapped" + componentName + " as " + componentName + " }\n"

	componentWriter := bufio.NewWriter(componentFile)
	_, err = componentWriter.WriteString(componentContent)
	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}
	componentWriter.Flush()

	err = os.MkdirAll(rootDir+"/__tests__", 0755)
	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}

	componentStoryFile, err := os.Create(rootDir + "/__tests__/" + componentName + ".stories.tsx")
	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}
	defer componentFile.Close()

	componentStoryFileContent := "import { type ComponentStory, type ComponentMeta } from \"@storybook/react\"\n\n"
	componentStoryFileContent += "import { " + componentName + " } from \"..\"\n\n"
	componentStoryFileContent += "const Default: ComponentMeta<typeof " + componentName + "> = {\n"
	componentStoryFileContent += "  title: \"" + componentName + "\",\n"
	componentStoryFileContent += "  component: " + componentName + "\n"
	componentStoryFileContent += "}\n\n"
	componentStoryFileContent += "const Template: ComponentStory<typeof " + componentName + "> = (args) => ("
	componentStoryFileContent += "<" + componentName + " {...args} />"
	componentStoryFileContent += ")\n\n"
	componentStoryFileContent += "export const DefaultExample = Template.bind({})\n"
	componentStoryFileContent += "DefaultExample.args = {\n"
	componentStoryFileContent += "  className: \"yahoo\"\n"
	componentStoryFileContent += "}\n\n"
	componentStoryFileContent += "export default Default\n"

	componentStoryFileWriter := bufio.NewWriter(componentStoryFile)
	_, err = componentStoryFileWriter.WriteString(componentStoryFileContent)
	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}
	componentStoryFileWriter.Flush()

	componentTestFile, err := os.Create(rootDir + "/__tests__/" + componentName + ".test.tsx")
	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}
	defer componentTestFile.Close()

	componentTestFileContent := "import { render, screen } from \"@testing-library/react\"\n"
	componentTestFileContent += "import \"@testing-library/jest-dom\"\n"
	componentTestFileContent += "import { composeStories } from \"@storybook/testing-react\"\n"
	componentTestFileContent += "import * as stories from \"./" + componentName + ".stories\"\n\n"
	componentTestFileContent += "const { DefaultExample } = composeStories(stories)\n\n"
	componentTestFileContent += "test(\"renders AnimContainer\", () => {\n"
	componentTestFileContent += "  render(<DefaultExample />)\n"
	componentTestFileContent += "  screen.getByTestId(\"\")\n"
	componentTestFileContent += "})\n"

	componentTestFileWriter := bufio.NewWriter(componentTestFile)
	_, err = componentTestFileWriter.WriteString(componentTestFileContent)
	if err != nil {
		log.Fatalf("Something went wrong: %v\n", err)
	}
	componentTestFileWriter.Flush()

}
