from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI() # 서버 설정은 된 상태

# React랑 통신을 위해서는 CORS 필수
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"], # 회사에 따라 달라져용
    allow_headers=["*"], # 회사에 따라 달라져용
)

@app.get("/")
def root():
    return {"message": "FastAPI 서버 정상 작동 중!"}

@app.get("/hello")
def hello(name: str = "민경쓰"):
    return {"message": f"안녕 {name}~!~!"}