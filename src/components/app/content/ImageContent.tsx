import Image from "next/image";



export default function ImageContent({ content, }: { content: any }) {
    return (
        <div>
            <Image src={content.image} width={1920} height={1080} alt="Image" />
        </div>
    )
}