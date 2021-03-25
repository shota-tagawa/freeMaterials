import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { firebaseSignUp } from '../../store/user';
import { Button, TextField, LinkText } from '../atoms';

interface SignUpFormProps {
  className?: string,
}

const SignInForm = (props: SignUpFormProps) => {
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
        onClick={() => { dispatch(firebaseSignUp(email, password)) }}
      >
        サインアップ
      </Button>
      <p>すでに登録済みの方は<LinkText href="/signin" text="こちら" /></p>
    </div>
  )
}

export default SignInForm;