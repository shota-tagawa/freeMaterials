import { ChangeEvent, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';
import { close } from '../../store/menu';
import { RootState } from '../../store';
import { Button, TextField } from '../atoms';

interface SearchFormProps {
  className?: string,
  fullWidth?: boolean,
  textFieldClassName?: string,
}

const SearchForm = (props: SearchFormProps) => {
  const dispatch = useDispatch();
  const { className, fullWidth, textFieldClassName } = props;
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const inputSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value);

  const onClickSearch = () => {
    Router.push(`/search?keyword=${searchKeyword}`);
    dispatch(close())
  }

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
      <Button onClick={onClickSearch}>検索</Button>
    </div>
  )
}

export default SearchForm;