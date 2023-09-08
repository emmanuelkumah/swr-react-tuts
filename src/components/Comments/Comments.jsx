import useSWR, { preload } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

preload("https://jsonplaceholder.typicode.com/users", fetcher);

const Comments = () => {
  const { data, isLoading, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts/1/comments",
    fetcher
  );

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;
  return (
    <div>
      {data.map((comment) => (
        <div className="comments_card" key={comment.id}>
          <h3>{comment.body}</h3>
          <p>
            <span>author</span>
            {comment.name}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Comments;
