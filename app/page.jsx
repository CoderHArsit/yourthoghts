import Feed from "@components/Feed"
const Home = () => {
  return (
<section className="w-full flex-center flex-col">
  <h1 className="head_text text-center">
    Discover and Share
    <br className="max-md:hidden"/>
    <span className="orange_gradient text-center">AI powered promt</span>
  
  <p className="desc text-center">
    Promptopia is an open-source Ai prompting tool for moodern world to discover,create and share creative prompts </p></h1>
    <Feed/>
</section>
  )
}

export default Home
