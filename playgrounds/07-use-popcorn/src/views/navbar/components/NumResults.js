function NumResults({ moviesCount }) {
  return (
    <p className="num-results">
      Found <strong>{moviesCount}</strong> results
    </p>
  );
}

export default NumResults;
