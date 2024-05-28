import cl from './ErrorMessage.module.scss';

type Props = {
  message: string;
};

const ErrorMessage = ({ message }: Props) => {
  return <div className={cl.message}>{message}</div>;
};
export default ErrorMessage;
