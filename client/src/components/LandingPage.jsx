import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Collaborative Document Editing
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Empower your team to work together seamlessly with real-time
                  collaboration, version control, and powerful commenting tools.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  to="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Try for Free
                </Link>
                <Link
                  to="#"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                Key Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Powerful Collaboration Tools
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Empower your team to work together seamlessly with real-time
                collaboration, version control, and powerful commenting tools.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <img
              src="/placeholder.svg"
              width="550"
              height="310"
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">
                      Real-Time Collaboration
                    </h3>
                    <p className="text-muted-foreground">
                      Edit documents together in real-time, with changes
                      instantly synced across all users.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Version Control</h3>
                    <p className="text-muted-foreground">
                      Track changes and revert to previous versions with our
                      powerful version control system.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="grid gap-1">
                    <h3 className="text-xl font-bold">Powerful Commenting</h3>
                    <p className="text-muted-foreground">
                      Collaborate on documents with rich commenting tools,
                      including @mentions and threaded discussions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              What Our Users Say
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our customers about how Collab Editor has transformed
              the way they work.
            </p>
          </div>
          <div className="divide-y rounded-lg border">
            <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-3">
              <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 p-8">
                {/* <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar> */}
                <div className="text-center">
                  <p className="text-lg font-medium">John Doe</p>
                  <p className="text-muted-foreground">Product Manager</p>
                </div>
                <p className="text-muted-foreground">
                  "Collab Editor has been a game-changer for our team. The\n
                  real-time collaboration and version control features have\n
                  made our document workflows so much more efficient."
                </p>
              </div>
              <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 p-8">
                {/* <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>SM</AvatarFallback>
                  </Avatar> */}
                <div className="text-center">
                  <p className="text-lg font-medium">Sarah Miller</p>
                  <p className="text-muted-foreground">Marketing Coordinator</p>
                </div>
                <p className="text-muted-foreground">
                  "I love how Collab Editor makes it easy for our team to\n
                  collaborate on content. The commenting tools are so\n helpful
                  for providing feedback and staying aligned."
                </p>
              </div>
              <div className="mx-auto flex w-full flex-col items-center justify-center gap-4 p-8">
                {/* <Avatar>
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar> */}
                <div className="text-center">
                  <p className="text-lg font-medium">Alex Martinez</p>
                  <p className="text-muted-foreground">Software Engineer</p>
                </div>
                <p className="text-muted-foreground">
                  "Collab Editor has streamlined our document workflows and\n
                  made it so much easier to keep track of changes and\n
                  versions. It's a must-have tool for any team."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
