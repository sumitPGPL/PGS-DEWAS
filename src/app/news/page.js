import NewsCard from '@/components/Newscards/page'

async function page() {
  return (
    <>
      <div className="flex" >
        <div className='mt-5'><NewsCard /></div>
      </div>
    </>
  );
}

export default page;