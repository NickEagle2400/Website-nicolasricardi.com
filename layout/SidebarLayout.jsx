import { BlogRoll, SidebarBlog } from "../components"

const SidebarLayout = (props) => {
    return (
        <section className="relative py-12 xl:pt-32 xl:pb-20 bg-black">
            <div className="w-full px-4 mx-auto xl:px-0 xl:max-w-7xl">
                <div className="w-full flex flex-col md:flex-row gap-12">
                    {props.children}
                </div>
            </div>
        </section>
    )
}

export default SidebarLayout
