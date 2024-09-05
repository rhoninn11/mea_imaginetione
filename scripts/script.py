import os, subprocess

def ensure_path_exist(paths):
    for path in paths:
        if not os.path.exists(path):
            os.makedirs(path, exist_ok=True)


cert_dir = "fs/cert"
cert_key = f"{cert_dir}/cert.key"
cert_crt = f"{cert_dir}/cert.crt"
ca_dir = f"{cert_dir}/ca"
ca_key = f"{ca_dir}/ca.key"
ca_crt = f"{ca_dir}/ca.crt"
ensure_path_exist([cert_dir, ca_dir])

cmds = []
cmds.append("npm install -g mkcert")
cmds.append(f"mkcert create-ca --key {ca_key} --cert {ca_crt}")
cmds.append(f"mkcert create-cert --ca-key {ca_key} --ca-cert {ca_crt} --key {cert_key} --cert {cert_crt}")
cmds = [cmd.split(" ") for cmd in cmds]

for cmd in cmds:
    subprocess.run(cmd)