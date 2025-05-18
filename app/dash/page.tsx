import PostCard from "@/components/PostCard";
import { getPosts } from "@/lib/actions/Post";

const Page = async () => {

  const posts = await getPosts();

  return <>
    <div className="flex flex-col basis-7/12 border-r border-white overflow-y-auto">
      {
        posts.map(ele => {
          return <PostCard data={ele} key={ele.post_id}></PostCard>
        })
      }
    </div>
    <div className="flex flex-col"></div>
  </>
}
export default Page;
