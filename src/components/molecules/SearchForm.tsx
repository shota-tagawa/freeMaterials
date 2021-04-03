import { ChangeEvent, useState } from 'react';
import Router from 'next/router';
import { Button, TextField } from '../atoms';

interface SearchFormProps {
  className?: string,
  fullWidth?: boolean,
  textFieldClassName?: string,
}

const SearchForm = (props: SearchFormProps) => {
  const { className, fullWidth, textFieldClassName } = props;
  const [searchKeyword, setSearchKeyword] = useState<string>('');
  const inputSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value);

  return (
    <div className={className ? className : null}>
      <div className="mb-4">
        <TextField
          onChange={(e) => inputSearchKeyword(e)}
          value={searchKeyword}
          fullWidth={fullWidth}
          className={textFieldClassName}
        />
      </div>
      <Button onClick={() => { Router.push(`/search?keyword=${searchKeyword}`) }}>検索</Button>
    </div>
  )
}

export default SearchForm;