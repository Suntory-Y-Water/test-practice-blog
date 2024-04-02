from pydantic import BaseModel, Field, constr

class User(BaseModel):
    username: str
    email: constr(min_length=1) = Field(..., example="123456@gmail.com")
    full_name: constr(min_length=1) = Field(..., example="Taro Tanaka")
    disabled: bool = Field(False, example=False)
