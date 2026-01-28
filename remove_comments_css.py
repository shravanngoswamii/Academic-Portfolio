import re
import sys

def remove_css_comments(content):
    # Remove /* */ comments
    return re.sub(r'/\*.*?\*/', '', content, flags=re.DOTALL)

if __name__ == "__main__":
    file_path = sys.argv[1]
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    new_content = remove_css_comments(content)
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
    print(f"Removed comments from {file_path}")