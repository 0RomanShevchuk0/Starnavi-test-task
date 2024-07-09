import { FC } from "react"

type MessageProps = {
  message: string
  isError?: boolean
}

const Message: FC<MessageProps> = ({ message, isError }) => (
  <div className={`text-center mt-10 ${isError ? "text-red-500" : ""}`}>{message}</div>
)

export default Message
