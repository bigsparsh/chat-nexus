import Header from "@/components/Header";
import { checkUser } from "@/lib/actions/User";
import Link from "next/link";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  await checkUser();
  return <div className="flex flex-col">
    <Header />
    <div className="flex border-t border-stone-400">
      <div className="flex flex-col border-r border-stone-400 text-2xl gap-3  py-10 p-5 h-screen basis-2/12 font-semibold">
        <Link href="/dash">My Feed</Link>
        <Link href="/dash/explore">Explore</Link>
        <Link href="/dash/chat">Chat</Link>
        <Link href="/dash/upload-post">Upload Post</Link>
        <Link href="/dash/graph" >Graph View</Link>
      </div>
      {children}
    </div>
  </div>
}
export default Layout;
