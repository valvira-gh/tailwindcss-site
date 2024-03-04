const HomePage: React.FC = () => {
  return (
    <div className="w-4/12   flex flex-col  items-start p-5">
      <h3 className="text-3xl  text-sky-400 mb-2">What is Pet Care Data?</h3>
      <p className="text-xl text-slate-300 mt-2">
        Pet Care Data is a web application that allows you to track the health
        and wellness of your pets. You can add, edit, and delete pets, as well
        as add, edit, and delete their health records.
      </p>
      <p className="text-xl text-slate-300 mt-2">
        It's my demo project to show how to build a full-stack application using
        React 19, Next.js 14, PostgreSQL, Kysely.dev and TailwindCSS. Deployment
        is done using Vercel.
      </p>
    </div>
  );
};

export default HomePage;
