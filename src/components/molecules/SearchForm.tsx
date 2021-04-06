import { ChangeEvent, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Router from 'next/router';
import { close } from '../../store/menu';
import { Button, TextField } from '../atoms';

interface SearchFormProps {
  className?: string,
  fullWidth?: boolean,
  textFieldClassName?: string,
  defaultQuery?: string,
}

const SearchForm = (props: SearchFormProps) => {
  const dispatch = useDispatch();
  const { className, fullWidth, textFieldClassName, defaultQuery } = props;
  const [searchKeyword, setSearchKeyword] = useState<string>('');

  const inputSearchKeyword = (e: ChangeEvent<HTMLInputElement>) => setSearchKeyword(e.target.value);

  const onClickSearch = () => {
    setSearchKeyword('');
    Router.push(`/search?keyword=${searchKeyword}`);
    dispatch(close())
  }

  useEffect(() => {
    defaultQuery && setSearchKeyword(defaultQuery);
  }, [defaultQuery])

  return (
    <div className={className ? className : null}>
      <div className="mb-4">
        <TextField
          onChange={(e) => inputSearchKeyword(e)}
          value={searchKeyword}
          fullWidth={fullWidth}
          className={textFieldClassName}
          placeholder='素材を検索'
        />
      </div>
      <Button onClick={onClickSearch}>検索</Button>
    </div>
  )
}

export default SearchForm;