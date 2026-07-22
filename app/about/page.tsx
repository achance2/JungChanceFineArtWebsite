import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import AwardCard from "@/components/awards";
import { awardsByYear } from "@/data/awards";

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      <section>
        <div className="mx-auto max-w-[1300px]">
          <div className="text-center md:text-left">
            <h1 className="pt-20 pb-10 text-3xl font-semibold text-[#5B5149]">
              ABOUT THE ARTIST <br />
            </h1>

            <Image className="rounded-lg mr-6 mb-4 float-left"
              src = "/Jung.JPG"
              alt = "Artist"
              width = {600}
              height = {600}
            />

            <p className="leading-relaxed text-lg text-[#5f5555] mb-10">
              Hello,

              I am an artist living in Flower Mound, TX. I was born and raised in South Korea. Growing up, my mother was a big mentor for me. She had very meticulous hands and would make anything like magic. She would sow or knit our clothes, decorated our house very creatively, kept everything clean, and was a great cook. All her tools were my toy. If she saw, I saw with her. As a young adult, I became like my mother. I was very creative and good at most of the craft works. However, I never thought about going to an art school. Instead, I studied accounting in college.

              

              After I immigrated to USA, I worked at the inventory department of my college in DuPage, Chicago, IL. One time, I had to do inventory control for all the art works owned by the school. It was a very challenging project because most of the time, I could not match the title on the list to the actual art piece. I spent so much time in the art building gathering information talking to different people. Finally, I was able to create an art inventory book for the school, so that they could locate the art pieces easily. I remember getting into the art building which had its own unique small and quiet hallways full of paintings and drawings created by students. The moments being there were very special and joyful because I felt connected with my inner self.

              

              Later, I had a chance to live in Hong Kong through my husband’s job. Hong Kong was a very international, big, and crowded city. It was full of galleries and museums where you could spend days without having seen all of it. I could take a train to the worlds' largest mass producer of oil paintings in a village, Defen, in Shenzhen. The exposer was amazing. I also traveled to east Asian countries to explore more galleries to buy art pieces. 

              Coming back from Hong Kong in 2009, I started drawing and painting. I was self-taught at first by books and watching YouTube videos for many years until I found a teacher, Dan Edmonson. He taught me the essence of still life and my works are greatly influenced by him. I paint mostly still life at my home studio in a realistic style.  I was inspired by works from Helen Van Wyk, David Laffel, Richard Schmid, Daniel Keys and Kathleen Dunphy. There are so many other talented artists who I envy their talent and wish someday I could be as good as them.

              

              I have won many awards including a best show from various art shows in the Houston area. I put much effort to excel in every painting. I hope you can see my artistic passion through my works.

              
              <br/>
              <br/>
              Thanks for stopping by my website!
            </p>

            <h2 className="text-left py-10 text-3xl font-semibold border-t text-[#5B5149]">
              MAJOR AWARDS, SHOWS, AND EXHIBITIONS
            </h2>

            <div className="mb-20 space-y-14">
              {awardsByYear.map((yearGroup) => (
                <section key={yearGroup.year}>
                  <h3 className="mb-6 text-2xl font-bold text-[#5f5555]">
                    {yearGroup.year}
                  </h3>

                  <div className="space-y-8">
                    {yearGroup.awards.map((item, index) => (
                      <AwardCard
                        key={`${yearGroup.year}-${index}`}
                        award={item.award}
                        event={item.event}
                        location={item.location}
                        paintings={item.paintings}
                      />
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}