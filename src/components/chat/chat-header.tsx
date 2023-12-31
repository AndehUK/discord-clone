import { Hash } from "lucide-react";
import { MobileToggle } from "@/components/mobile-toggle";
import { UserAvatar } from "@/components/user-avatar";
import { SocketIndicator } from "@/components/socket-indicator";
import { ChatAudioButton } from "@/components/chat/chat-audio-button";
import { ChatVideoButton } from "@/components/chat/chat-video-button";

interface ChatHeaderProps {
    guildId: string;
    name: string;
    type: "channel" | "conversation";
    imageUrl?: string;
}

export const ChatHeader = ({
    guildId,
    name,
    type,
    imageUrl,
}: ChatHeaderProps) => {
    return (
        <div
            className="text-md font-semibold px-3 flex items-center h-12 border-neutral-200 dark:border-neutral-800 border-b-2"
        >
            <MobileToggle guildId={guildId} />
            {type === "channel" && (
                <Hash className="w-5 h-5 text-zinc-500 dark:text-zinc-400 mr-2" />
            )}
            {type === "conversation" && (
                <UserAvatar src={imageUrl} className="mr-2 h-8 w-8 md:h-8 md:w-8" />
            )}
            <p className="font-semibold text-md text-black dark:text-white">
                {name}
            </p>
            <div className="ml-auto flex items-center">
                {type === "conversation" && (
                    <>
                        <ChatAudioButton />
                        <ChatVideoButton />
                    </>
                )}
                <SocketIndicator />
            </div>
        </div>
    )
}