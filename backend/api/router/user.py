from fastapi import APIRouter, Depends
import api.schemas.user as user_schema
import api.oauth as oauth

router = APIRouter()

def fake_decode_token(token):
    return user_schema.User(
        username=token + "fakedecoded", email="john@example.com", full_name="John Doe"
    )

async def get_current_user(token: str = Depends(oauth.oauth2_scheme)):
    user = fake_decode_token(token)
    return user

@router.get("/users/me")
async def read_users_me(current_user: user_schema.User = Depends(get_current_user)):
    return current_user