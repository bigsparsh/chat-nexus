"use client"

import { UserCard } from "@/components/UserCard";
import { getUsers } from "@/lib/actions/User";
import { Post } from "@/lib/generated/prisma";
import { useEffect, useState } from "react";

import { AiOutlineLoading3Quarters } from "react-icons/ai"

const Explore = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<{
    name: string;
    image: string;
    user_id: string;
    email: string;
    address: string | null;
    phone: string | null;
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
    posts: Post[];
  }[]
  >();
  useEffect(() => {
    const gets = async () => {
      setLoading(true)
      const users = await getUsers();
      setUsers(users);
      setLoading(false)
    }
    gets()
  }, [])

  return <div className="flex flex-col basis-10/12">
    {
      loading ?
        <div className="h-full w-full flex justify-center items-center">
          <AiOutlineLoading3Quarters className="animate-spin" size={50} />
        </div> : <div className="h-full w-full flex flex-col p-10 gap-10">
          <input type="text" placeholder="Search for anyone" className="text-lg px-4 py-2 rounded-xl bg-stone-900 outline-none" />
          <div className="flex flex-col gap-5">
            <h1 className="text-xl font-semibold">Our Suggestions</h1>
            <div className="grid grid-cols-2 gap-3">
              {users?.map((ele) => {
                return <UserCard key={ele.user_id} name={ele.name} email={ele.email} image={ele.image} user_id={ele.user_id} user1={ele.user1} user2={ele.user2} />
              })}
            </div>
          </div>
        </div>
    }
  </div>
}
export default Explore;
