import { atom, useAtom } from "jotai";

// 注册页面的密码可见状态
const initIsIconVisible = [false, false]
export const IsIconVisibleAtom = atom(initIsIconVisible)

// 当前处于登陆页面
export const ifAuthAtom = atom(false)

// 用户输入信息
export interface userInfoProps {
    username: string,
    password: string
}
const initUserInfo: userInfoProps = {
    username: "",
    password: ""
}
export const userSignupInfoAtom = atom({ ...initUserInfo, confirmPassword: '' })
export const userLoginInfoAtom = atom(initUserInfo)
export const useSignupUserInfo = () => {
    const [userInfo, setUserInfo] = useAtom(userSignupInfoAtom);

    // 设置用户名
    const setUsername = (username: string) => {
        setUserInfo(prev => ({ ...prev, username }));
    };

    // 设置密码
    const setPassword = (password: string) => {
        setUserInfo(prev => ({ ...prev, password }));
    };

    // 设置确认密码
    const setConfirmPassword = (confirmPassword: string) => {
        setUserInfo(prev => ({ ...prev, confirmPassword }));
    };

    return {
        userInfo,
        setUsername,
        setPassword,
        setConfirmPassword
    };
};
export const useLoginUserInfo = () => {
    const [userInfo, setUserInfo] = useAtom(userLoginInfoAtom);

    // 设置用户名
    const setUsername = (username: string) => {
        setUserInfo(prev => ({ ...prev, username }));
    };

    // 设置密码
    const setPassword = (password: string) => {
        setUserInfo(prev => ({ ...prev, password }));
    };

    return {
        userInfo,
        setUsername,
        setPassword
    };
};


// 用户信息不正确反馈
const initFeedBack = {
    username: '',
    password: '',
    confirmPassword: ''
}
const feedBackAtom = atom(initFeedBack);

export const useFeedBack = () => {
    const [userError, setUserError] = useAtom(feedBackAtom);

    // 设置用户名错误信息
    const feedBackUserNameError = (usernameError: string) => {
        setUserError(prev => ({ ...prev, username: usernameError }));
    };

    // 设置密码错误信息
    const feedBackPasswordError = (passwordError: string) => {
        setUserError(prev => ({ ...prev, password: passwordError }));
    };

    // 设置确认密码错误信息
    const feedBackConfirmPasswordError = (confirmPasswordError: string) => {
        setUserError(prev => ({ ...prev, confirmPassword: confirmPasswordError }));
    };

    return {
        userError,
        feedBackUserNameError,
        feedBackPasswordError,
        feedBackConfirmPasswordError
    };
}

