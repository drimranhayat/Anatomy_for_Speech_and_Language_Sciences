from pathlib import Path
import runpy
p=Path(__file__).resolve().parent
for name in ['build.py','essays.py','tables.py','audit.py']:
 runpy.run_path(str(p/name),run_name='__main__')
