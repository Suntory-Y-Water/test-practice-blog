from typing import Annotated
from fastapi import Depends, HTTPException
from datetime import datetime, timedelta, timezone

import api.auth as auth
import api.models.user as user_model
import api.cruds.user as user_crud

from fastapi import APIRouter, Depends, HTTPException, status
import api.schemas.user as user_schema


router = APIRouter()

@router.post("/token")
async def login_for_access_token(
    form_data: auth.OAuth2PasswordRequestForm = Depends(),
) -> user_schema.Token:
    user = user_crud.authenticate_user(user_model.fake_users_db, form_data.username, form_data.password)
    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect username or password",
            headers={"WWW-Authenticate": "Bearer"},
        )
    access_token_expires = timedelta(minutes=auth.ACCESS_TOKEN_EXPIRE_MINUTES)
    access_token = user_crud.create_access_token(
        data={"sub": user.username}, expires_delta=access_token_expires
    )
    return user_schema.Token(access_token=access_token, token_type="bearer")

@router.get("/users/me/", response_model=user_schema.User)
async def read_users_me(current_user: user_schema.User = Depends(user_crud.get_current_active_user)):
    return current_user

@router.get("/users/me/items/")
async def read_own_items(current_user: user_schema.User = Depends(user_crud.get_current_active_user)):
    return [{"item_id": "Foo", "owner": current_user.username}]