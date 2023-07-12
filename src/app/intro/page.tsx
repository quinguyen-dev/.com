import Link from "next/link";

async function getCurrentSong() {
  const response = await fetch("http://localhost:3000/api/spotify", {
    method: "GET",
    next: { revalidate: 60, tags: ["current_song"] },
  });

  return await response.json();
}

export default async function IntroPage() {
  // const data = await getCurrentSong();

  return (
    <div className="align-items flex w-[640px] min-w-[320px] flex-col justify-center px-6 [&>p]:pt-6">
      <h1 className="whitespace-nowrap text-2xl font-bold">hi, i'm qui 👋</h1>
      <p>
        I’m a frontend developer with a passion to create amazing user
        experiences. I am currently finishing up the last year of my BS/MS in CS
        at Worcester Polytechnic Institute.
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
        eligendi cupiditate fugit dolores illo nemo nobis corrupti voluptatibus
        voluptate in, natus, deleniti provident officia aspernatur quaerat ipsum
        quibusdam consequuntur quis!
      </p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
        eligendi cupiditate fugit dolores illo nemo nobis corrupti voluptatibus
        voluptate in, natus, deleniti provident officia aspernatur quaerat ipsum
        quibusdam consequuntur quis!
      </p>
      {/* <hr className="my-6" />
      <nav>
        <ul className="flex justify-between">
          <li>
            <Link href="/work">work</Link>
          </li>
          <li>
            <Link href="/resume">resume</Link>
          </li>
        </ul>
      </nav> */}
    </div>
  );
}
