"use client";
import { createFriend } from "@/lib/actions/Friend";
import { useUser } from "@clerk/nextjs";
import Image from "next/image"
import { useEffect, useState } from "react";

export enum FollowingStatus {
    FOLLOWBACK,
    FOLLOWING,
    FOLLOW,
    UNFOLLOW
}

export const UserCard = (
    {
        name, email, image, user_id, user1, user2
    }: {
        name: string,
        email: string,
        image: string,
        user_id: string,
        user1: {
            mutual: boolean,
            user1_id: string,
            user2_id: string,
        }[]
        user2: {
            mutual: boolean,
            user1_id: string,
            user2_id: string,
        }[]
    }
) => {
    const [followStatus, setFollowStatus] = useState<FollowingStatus>();
    const { user } = useUser();

    useEffect(() => {
        if (!user) return
        let flag = false;
        user1.map(ele => {
            if (ele.user2_id === user?.id && ele.user1_id === user_id) {
                flag = true;
                if (ele.mutual) setFollowStatus(FollowingStatus.UNFOLLOW)
                else setFollowStatus(FollowingStatus.FOLLOWBACK)
            }
        })
        if (flag) return;

        user2.map(ele => {
            if (ele.user1_id === user?.id && ele.user2_id === user_id) {
                flag = true;
                if (ele.mutual) setFollowStatus(FollowingStatus.UNFOLLOW)
                else setFollowStatus(FollowingStatus.FOLLOWING)
            }
        })
        if (flag) return;

        setFollowStatus(FollowingStatus.FOLLOW)

    }, [user])

    return <div className="flex bg-stone-800 rounded-xl overflow-clip" onClick={() => {
        // router.push("/dash/user/" + user_id);
    }}>
        <Image src={image} width={100} height={100} alt={name + "'s profile"} />
        <div className="flex flex-col p-5 grow">
            <h1 className="text-2xl font-semibold">{name}</h1>
            <h3 className="text-lg opacity-75">{email}</h3>
        </div>
        <div className="flex flex-col p-5 justify-center">
            {
                <button className="text-lg bg-stone-400 px-3 py-1 rounded-xl text-stone-800" onClick={async () => {
                    await createFriend({
                        friend_id: user_id
                    })
                }}>{followStatus === FollowingStatus.UNFOLLOW ? "Unfollow" : followStatus === FollowingStatus.FOLLOW ? "Follow" : followStatus === FollowingStatus.FOLLOWING ? "Following" : "Follow Back"}</button>
            }
        </div>
    </div>
}
