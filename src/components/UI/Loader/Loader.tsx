import cl from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={cl.loader}>
      <div className={cl.leaf}></div>
      <div className={cl.leaf}></div>
      <div className={cl.leaf}></div>
      <div className={cl.leaf}></div>
      <div className={cl.leaf}></div>
      <div className={cl.leaf}></div>
      <div className={cl.leaf}></div>
      <div className={cl.leaf}></div>
    </div>
  );
};

export default Loader;
