from fastapi import FastAPI
from api.router import blog, user
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    # ローカルホストからのアクセスを許可  # Docker内のサービスからのアクセスを許可
    allow_origins=["http://localhost:3000", "http://frontend:3000"],
    allow_credentials=True,
    allow_methods=["*"],  # すべてのHTTPメソッドを許可
    allow_headers=["*"],  # すべてのヘッダーを許可
)
app.include_router(blog.router)
app.include_router(user.router)
