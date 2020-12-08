/** @jsx jsx */
import { jsx } from 'theme-ui';
import Link from 'next/link';

export default function Technology() {
    return (
        <div sx={{ height: `calc(100vh - 60px)` }}>
            <div
                sx={{
                    variant: 'containers.page',
                    display: 'flex',
                    alignItems: 'center',
                    height: '100%'
                }}>
                <h1 sx={{ fontSize: 8, my: 0 }}>technology</h1>
            </div>
            <div>
                <Link href="/">
                    <a>Home</a>
                </Link>
            </div>
            <div>
                <Link href="/blog/technology/">
                    <a>Blog</a>
                </Link>
            </div>
        </div>
    );
}
