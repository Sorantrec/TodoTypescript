import { RootState } from '../redusers/mainReducer';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
const userTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export default userTypedSelector;