"use client";

type Props = {
    error: Error,
    reset: (...args: any[]) => any;
}

const NewSnippetErrorPage = ({error}: Props) => {
    return <div>
        Something goes wrong: {error.message}
    </div>
};

export default NewSnippetErrorPage;
