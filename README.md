# test-practice-blog

テストをもうちょい深く知るための練習用リポジトリ

``` bash

cd backend
mkdir .dockervenv

# ビルドしてイメージの作成
docker compose build

# 依存パッケージのダウンロード
docker-compose run --entrypoint "poetry install --no-root" fast-api

# 依存パッケージの再ビルド
docker-compose build --no-cache

# コンテナの起動
docker compose up -d

# データベースの初期化
docker-compose exec fast-api poetry run python -m api.migrate_db
```