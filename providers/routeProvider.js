import { promises } from "fs";
import { sep } from "path";

export default async (app) => {
    register(app, await readDir('./routes'));
}

async function readDir(path)
{
    if (!path.endsWith(sep))
    {
        path = path += sep;
    }

    let paths = [];
    const dir = await promises.opendir(path);

    for await (const dirent of dir)
    {
        if (dirent.isDirectory())
        {
            paths = paths.concat(await readDir(path + dirent.name))
        } else paths.push(path + dirent.name);
    }

    return paths;
}

function register(app, files)
{
    files.forEach(file => {
        import('../'+file).then((routes) => {
            routes = routes.default;
            let split = [];
            let base = (split = (file.split(sep)).splice(2)).join('/');
            if (split[split.length - 1] === 'index.js')
            {
                if (split.length !== 1)
                {
                    base = '/' + (split.splice(0, split.length - 1)).join('/');
                } else base = '';
            } else { 
                base = '/' + base;
                base = base.replace('.js', '');
            }

            Object.keys(routes).forEach((key) => {
                const action = routes[key];
                console.log(action[0], base+key);
                app[action[0]](base+key, action[1]);
            });
        });
    });
} 
