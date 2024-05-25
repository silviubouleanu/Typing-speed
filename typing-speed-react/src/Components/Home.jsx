const Home = ({ onGame }) => {
  return (
    <div className="home">
      <div className="title">TYPING GAME</div>
      <button onClick={() => onGame("playing")} className="btnPlay">
        Play Game
      </button>
    </div>
  );
};
export default Home;