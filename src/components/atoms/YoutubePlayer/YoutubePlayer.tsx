import { type FC } from "react"
import { uiWrapper, kulCx } from "../../../util"
import "./youtubePlayer.scss"

interface YoutubePlayerProps {
  className?: string
  title: string
  embedId: string
}

const YoutubePlayer: FC<YoutubePlayerProps> = ({ className, embedId, title }) => {
  return (
   <div
     className={`${kulCx("youtube-player", className)}`}
     data-testid="youtube-player"
   >
    <iframe
      src={`https://www.youtube.com/embed/${embedId}`}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
   </div>
  )
}

const wrappedYoutubePlayer = uiWrapper(YoutubePlayer)

export { wrappedYoutubePlayer as YoutubePlayer, type YoutubePlayerProps }
