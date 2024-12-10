CREATE TABLE journal (
    id UUID,
    user_id UUID,
    username TEXT,
    date DATE,
    content TEXT
);

CREATE TABLE profiles (
    id UUID,
    user_id UUID,
    username TEXT,
    created_at TIMESTAMP WITH TIME ZONE
);

CREATE TABLE stickers (
    id UUID,
    user_id UUID,
    username TEXT,
    name TEXT
);

CREATE TABLE tasks (
    id UUID,
    user_id UUID,
    username TEXT,
    title TEXT,
    tier TEXT,
    spoons INTEGER,
    status TEXT,
    due_date DATE
);
