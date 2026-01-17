
type Props = {
     params: Promise<{ envid: string }>
}

export default async function page({ params }: Props) {
     const { envid } = await params;

     return (
          <div>envfile {envid}</div>
     )
}