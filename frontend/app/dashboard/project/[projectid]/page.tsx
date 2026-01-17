
type Props = {
     params: Promise<{ projectid: string }>
}

export default async function page({ params }: Props) {
     const { projectid } = await params;

     return (
          <div>project {projectid}</div>
     )
}