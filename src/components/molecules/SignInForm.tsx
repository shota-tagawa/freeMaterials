import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebaseSignIn } from '../../store/user';
import { Button, TextField, LinkText } from '../atoms';

interface SignInFormProps {
  className?: string,
}

const SignInForm = (props: SignInFormProps) => {
  const { className } = props;
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  const inputEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const inputPassword = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);

  return (
    <div className={className}>
      <div className="mb-4">
        <TextField
          className={'w-full sm:w-80'}
          placeholder={'メールアドレス'}
          value={email}
          onChange={(e) => { inputEmail(e) }}
        />
      </div>
      <div className="mb-4">
        <TextField
          className={'w-full sm:w-80'}
          placeholder={'パスワード'}
          value={password}
          onChange={(e) => { inputPassword(e) }}
        />
      </div>
      <Button
        className="mb-4"
        onClick={() => { dispatch(firebaseSignIn(email, password)) }}
      >
        サインイン
      </Button>
      <p>まだ会員登録をしていない方は<LinkText href="/signup" text="こちら" /></p>
    </div>
  )
}

export default SignInForm;