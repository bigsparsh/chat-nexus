import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export type FullPostType = {
    user: {
        image: string;
        name: string;
        user_id: string;
        email: string;
        address: string | null;
        phone: string | null;
    };
} & {
    post_id: string;
    userId: string;
    image: string | null;
    message: string | null;
}

const PostCard = ({ data }: { data: FullPostType }) => {
    return <div className="border border-stone-700">
        <div className="flex gap-5 items-center p-5">
            <Avatar className="w-12 h-12 ">
                <AvatarImage src={data.user.image} />
                <AvatarFallback>{data.user.name[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">

                <h1 className="grow text-xl font-semibold">{data.user.name}</h1>
                <p className="opacity-75">{data.user.email}</p>
            </div>
        </div>
        <div className="h-[350px] bg-cover bg-center" style={{
            backgroundImage: `url(${data.image})`
        }}></div>
        <div className="p-5">
            <p>{data.message}</p>
        </div>
    </div>
}
export default PostCard;
