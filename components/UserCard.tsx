"use client";
import Image from "next/image"
import { useRouter } from "next/navigation";

export const UserCard = (
    {
        name, email, image, user_id
    }: {
        name: string,
        email: string,
        image: string,
        user_id: string,
    }
) => {
    const router = useRouter();

    return <div className="flex bg-stone-800 rounded-xl overflow-clip" onClick={() => {
        router.push("/dash/user/" + user_id);
    }}>
        <Image src={image} width={100} height={100} alt={name + "'s profile"} />
        <div className="flex flex-col p-5">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <h3 className="text-lg opacity-75">{email}</h3>
        </div>
    </div>
}
