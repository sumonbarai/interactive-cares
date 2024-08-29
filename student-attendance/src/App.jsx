import "./assets/css/style.css";

function App() {
  return (
    <div className="attendance">
      <form>
        <input type="text" />
        <button type="submit">add</button>
      </form>

      <div className="content">
        <div className="all-student">
          <h3 className="title">all-student</h3>
          <div className="student">
            <p>sumon</p>
            <div>
              <button>edit</button>
              <button>delete</button>
            </div>
            <div>
              <button>present</button>
              <button>absent</button>
            </div>
          </div>
          <div className="student">
            <p>sumon</p>
            <div>
              <button>edit</button>
              <button>delete</button>
            </div>
            <div>
              <button>present</button>
              <button>absent</button>
            </div>
          </div>
          <div className="student">
            <p>sumon</p>
            <div>
              <button>edit</button>
              <button>delete</button>
            </div>
            <div>
              <button>present</button>
              <button>absent</button>
            </div>
          </div>
        </div>
        <div className="present-student">
          <h3 className="title">present-student</h3>
          <div className="student">
            <p>sumon</p>
            <div>
              <button>accidentally added </button>
            </div>
          </div>
          <div className="student">
            <p>sumon</p>
            <div>
              <button>accidentally added </button>
            </div>
          </div>
          <div className="student">
            <p>sumon</p>
            <div>
              <button>accidentally added </button>
            </div>
          </div>
        </div>
        <div className="absent-student">
          <h3 className="title">absent-studen</h3>
          <div className="student">
            <p>sumon</p>
            <div>
              <button>accidentally added </button>
            </div>
          </div>
          <div className="student">
            <p>sumon</p>
            <div>
              <button>accidentally added </button>
            </div>
          </div>
          <div className="student">
            <p>sumon</p>
            <div>
              <button>accidentally added </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
