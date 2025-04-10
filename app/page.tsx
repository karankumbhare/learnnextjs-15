import { Suspense } from "react";
import { prisma } from "./utils/db";
import BlogpostCard from "@/components/general/BlogpostCard";
import { Skeleton } from "@/components/ui/skeleton";

const getBlogPostData = async () => {
  const blogPostsData = await prisma.blogPost.findMany({
    select: {
      id: true,
      title: true,
      content: true,
      imageURL: true,
      authorId: true,
      authorName: true,
      authorAvatar: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  return blogPostsData;
};

export default function Home() {
  return (
    <>
      <div className="py-6">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Post</h1>
        <Suspense fallback={<BlogPostGrid />}>
          <BlogPosts />
        </Suspense>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          deserunt, enim sapiente exercitationem, expedita aperiam nisi dolore
          cum error quia cumque repellendus minima quibusdam recusandae. Natus
          quia odio necessitatibus, vitae obcaecati consequatur magni quae non
          illo culpa iusto molestiae nostrum earum maxime nihil voluptatibus a
          sapiente dolores nobis cupiditate consectetur optio rerum?
          Accusantium, quam. Qui deleniti tempora enim laborum atque inventore,
          totam architecto vitae error dolorum perferendis, illo quidem
          consequatur animi delectus porro, maxime dolores sit placeat facere
          ex. Expedita mollitia animi dolorum praesentium itaque eligendi a
          necessitatibus commodi, adipisci vel magnam obcaecati accusantium
          maxime unde molestiae nulla impedit. Possimus distinctio libero autem
          quas perspiciatis consequuntur sint animi eligendi. Autem in magni
          porro voluptatibus excepturi? Nihil ab at blanditiis libero rerum
          enim, quae perferendis reprehenderit molestiae sunt facere quibusdam
          earum, sed nulla quo numquam amet distinctio ipsum necessitatibus
          accusamus? Alias pariatur laboriosam explicabo sint odio sunt nemo qui
          aperiam, inventore eum eius facere quia voluptatum sed totam unde
          iusto ullam nam iure eaque ducimus. Odit, quidem asperiores vel
          nesciunt porro laborum consequuntur architecto ullam beatae culpa
          excepturi accusantium impedit dolor molestiae reprehenderit minus
          nostrum placeat explicabo magnam doloremque cumque nam at quas. Unde
          rem porro, animi quaerat quas maxime quia doloribus exercitationem
          nobis fugit deserunt suscipit obcaecati! Nihil reiciendis dolores
          explicabo natus aperiam itaque iste non modi, ipsa enim optio atque
          praesentium est voluptas rem perspiciatis commodi quae dolorum
          reprehenderit? Modi mollitia nisi aperiam dicta incidunt optio? Vel
          id, dolorum provident fugiat iste vitae culpa aliquam rerum
          cupiditate. Delectus autem saepe, quidem porro repudiandae cumque?
          Pariatur, natus. Recusandae asperiores voluptate mollitia facere
          itaque id hic et iusto repudiandae error quidem consectetur, in
          dolore, neque perferendis inventore, repellendus deleniti officiis
          quia ea excepturi quis dolores provident. Suscipit sint laborum,
          dolorem tenetur minus fugiat corrupti repellendus distinctio eum
          nostrum obcaecati temporibus fuga cum, reiciendis aliquid. Error
          suscipit sequi non autem sed tempore nesciunt aliquam ipsum saepe
          minus facilis assumenda modi quibusdam, vel praesentium esse
          perferendis quae possimus ratione ea! Delectus nemo sint expedita
          dignissimos! Optio asperiores neque aut sapiente? Optio in cumque
          deleniti labore ut soluta dignissimos quasi esse illum repudiandae,
          debitis nihil. Iure minus fuga alias ipsam, recusandae ipsum delectus
          odio eius neque doloribus cumque quod consectetur suscipit adipisci
          voluptatem magni architecto rem necessitatibus, tenetur culpa illo
          nobis debitis accusamus. Error esse ad debitis odio iure vel
          temporibus repudiandae velit sapiente! Quasi, exercitationem quibusdam
          sed, officiis, corrupti libero illo totam asperiores ab ex deserunt
          obcaecati reiciendis ut harum itaque vel nulla eveniet dolore velit
          atque necessitatibus temporibus. Praesentium laboriosam voluptatum
          consectetur, aspernatur voluptates mollitia sunt blanditiis vitae odio
          ex. Explicabo, eligendi, sequi ipsam, labore ea maxime accusantium
          quia corrupti magni consectetur nam suscipit quis architecto
          perspiciatis animi asperiores harum dolores. Totam facilis, itaque
          iste porro eius ad nesciunt, sit maxime aliquam praesentium odit
          corporis consectetur architecto vel provident fuga ratione, magnam
          temporibus cum perferendis eveniet ab suscipit. Sapiente, adipisci
          ratione aliquid laborum assumenda alias necessitatibus quisquam nulla
          velit, eveniet nisi, minima expedita quam itaque quia accusantium sit
          saepe optio tempora quaerat a? Autem distinctio voluptatum illum
          obcaecati eligendi nihil explicabo officiis assumenda! Sint deleniti
          possimus quisquam dolorum aspernatur, eveniet, totam rem maxime
          necessitatibus eligendi officia ipsa veritatis vel? Non quidem totam
          culpa provident enim necessitatibus earum beatae officiis atque, quod
          saepe. Non, asperiores error, quae minus laborum autem quod tenetur
          alias, voluptas aut mollitia enim hic animi officiis. Minima animi
          dolorum itaque vero facere veniam consequuntur enim tempore,
          voluptatibus ut, architecto cum, ad error nostrum reprehenderit!
          Mollitia, quidem incidunt eligendi expedita officiis cumque officia
          impedit velit nisi vel omnis ipsum rem sapiente asperiores
          consequuntur assumenda facilis corrupti suscipit iure. Aliquid
          quibusdam culpa est optio voluptates dolores exercitationem
          repellendus saepe magni, enim impedit pariatur officia ut. Praesentium
          culpa nobis unde at, aspernatur error expedita saepe nemo vel ex cum.
          Ad error officia nulla voluptatibus quam iusto, placeat quia quasi
          dolorem sequi assumenda. Eligendi ipsa ab quo iste suscipit
          dignissimos eos provident eveniet voluptates nulla optio ipsam,
          ducimus placeat repellat saepe nam doloribus, assumenda inventore odio
          expedita voluptas in? Beatae eum cumque laudantium totam facilis
          cupiditate perspiciatis, possimus nam aliquam odit ex suscipit dolores
          corporis maxime. Quo in dignissimos error doloribus nesciunt dolore
          deleniti autem optio sequi voluptatem, ad est ducimus dicta! Provident
          ea odio iste minima aperiam quasi veritatis tempora modi nulla. Nobis
          veniam doloremque dolores eos porro pariatur distinctio officiis. Modi
          quibusdam suscipit maiores aliquid. Tenetur vel fugit temporibus
          voluptatum repellendus! Quae, quis. Doloremque sapiente delectus
          nobis. Quam nisi maiores, totam harum rerum cupiditate at eius
          perspiciatis ipsam porro consectetur, obcaecati a suscipit illo
          similique quibusdam provident dicta deserunt beatae ad impedit soluta
          illum? Cupiditate, nihil voluptatum veritatis, quasi culpa possimus
          nam fugiat repellat ut quaerat eos! Magnam, non rerum! Blanditiis,
          itaque exercitationem! Id, adipisci? Dolorum quae dicta accusamus
          voluptates illum deserunt corporis esse perspiciatis asperiores
          provident officiis sit nostrum repellat architecto eligendi, ullam
          impedit molestiae delectus quos repellendus! Id, porro ratione
          voluptatum ab natus odio? Consequatur voluptatem tenetur, doloremque
          sint officiis blanditiis veritatis similique impedit! Asperiores odio
          beatae fugiat, sint, cum itaque, facilis ut accusantium molestiae aut
          consectetur! Dignissimos delectus repellendus quas recusandae cumque,
          omnis ratione animi distinctio molestias eos accusantium quasi numquam
          optio aperiam praesentium error. Harum facilis minus quaerat
          consequuntur, illum sequi, deserunt inventore, fugit a culpa
          perspiciatis blanditiis libero cum repellendus optio quae dolorem eum
          vitae. Atque inventore, veritatis tenetur, sapiente impedit cum
          corrupti omnis delectus, maxime dolorem ducimus! Architecto ratione
          eaque, modi voluptatibus recusandae numquam dolore expedita laborum
          perspiciatis eius officia nisi nulla, ipsa optio. Laboriosam quasi
          dolorem quas at amet vitae voluptate sequi facere magni perspiciatis
          suscipit cum saepe perferendis recusandae nam quo aspernatur a,
          corporis eligendi eos placeat minus! Ab facere illo quidem? Ex ipsam
          officia cumque quaerat facere sunt voluptatibus nemo minima. Ex
          incidunt, itaque quam placeat fugiat earum quisquam aspernatur, non
          libero possimus commodi laborum nulla assumenda iste voluptatem
          praesentium quos quibusdam dolore atque optio nisi ducimus adipisci
          beatae eaque! Molestias asperiores eaque optio distinctio, nostrum,
          reiciendis, deleniti minima tempore id repudiandae sapiente
          necessitatibus iste dolorem! Quas officia neque labore explicabo
          blanditiis?
        </p>
      </div>
    </>
  );
}

async function BlogPosts() {
  const data = await getBlogPostData();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data.length > 0 &&
        data.map((item) => <BlogpostCard blogPost={item} key={item.id} />)}
    </div>
  );
}

// Blog post grid with loading state
function BlogPostGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          className="rounded-lg border bg-card text-card-foreground shadow-sm h-[400px] flex flex-col overflow-hidden"
          key={index}
        >
          {/* Image Skeleton */}
          <Skeleton className="h-48 w-full rounded-none" />

          <div className="p-4 flex-1 flex flex-col gap-3">
            {/* Title Skeleton */}
            <Skeleton className="h-6 w-3/4" />

            {/* Content Skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
            </div>

            {/* Footer skeleton */}
            <div className="mt-auto flex items-center justify-between pt-4">
              <div className="flex items-center">
                <Skeleton className="w-8 h-8 rounded-full mr-2" />
                <Skeleton className="h-4 w-24" />
              </div>
              <Skeleton className="h-4 w-16" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
