from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

SECRET_KEY = "d00f15aa96a65378d8415c9a6389bbb14d8d14ce93ce09b7adeba866574e8e95"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30