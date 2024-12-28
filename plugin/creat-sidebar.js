import fs from 'fs';
import path from 'path';

const current_dir = process.cwd();

const find_dir_name = 'src';
const ignore_dir = ['.vuepress'];
const js_head_str = 'import { sidebar } from "vuepress-theme-hope";';
const js_export_head_str = 'export default sidebar({';
const js_export_end_str = '});';
const sidebar_mode = 'structure';
const sidebar_file_path = path.join(current_dir, "src/.vuepress/sidebar.ts");
const directories = ["/"];

(() => {
    const src_dir = path.join(current_dir, find_dir_name);
    console.log(`Start read dir list: ${src_dir}`);

    fs.readdir(src_dir, (err, files) => {
        if (err) {
            console.error(`Read dir error: ${err.message}`);
            return;
        }

        const promises = [];

        files.forEach(file => {
            const full_path = path.join(src_dir, file);
            const promise = new Promise((resolve, reject) => {
                fs.stat(full_path, (err, stats) => {
                    if (err) {
                        console.error(`Get file error: ${err.message}`);
                        reject(err);
                        return;
                    }
                    if (stats.isDirectory() && !ignore_dir.includes(file)) {
                        directories.push(file);
                    }
                    resolve();
                });
            });
            promises.push(promise);
        });

        Promise.all(promises)
            .then(() => {
                let js_str = '';
                directories.sort((a, b) => a.localeCompare(b));
                directories.forEach((tem) => {
                    js_str += `    "${tem}":'${sidebar_mode}',\n`
                });
                const res_js_str = `${js_head_str}\n${js_export_head_str}\n${js_str}${js_export_end_str}`;
                console.log("Creat sidebar file content\n", res_js_str);
                fs.writeFileSync(sidebar_file_path, res_js_str);
            })
            .catch(err => {
                console.error(`Error processing files: ${err.message}`);
            });
    });
})();
