/* eslint-disable react/no-unescaped-entities */
const Hovertitle = () => {
  return (
    <>
      <div className="hover_title-top">
        <h2 className="hover_title-top-text">Barcha o'quv kurslari </h2>
        <form>
          <input
            className="hover_title-top-input"
            type="search"
            placeholder="izlash"
          />
        </form>
      </div>
      <div className="hover__title-bottom">
        <ul className="hover__title-list">
          <li className="hover__title-list-item">
            <button className="hover__title-list-button">Barchasi</button>
          </li>
          <li className="hover__title-list-item">
            <button className="hover__title-list-button">Dizayn</button>
          </li>
          <li className="hover__title-list-item">
            <button className="hover__title-list-button">Marketing</button>
          </li>
          <li className="hover__title-list-item">
            <button className="hover__title-list-button">Boshqa</button>
          </li>
          <li className="hover__title-list-item">
            <button className="hover__title-list-button">Dasturlash</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hovertitle