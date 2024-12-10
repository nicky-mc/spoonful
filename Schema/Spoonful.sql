-- Table: journal
TABLE journal (
    id UUID,
    user_id UUID, -- References profiles(user_id)
    username TEXT,
    date DATE,
    content TEXT
);

-- Relationships for journal
-- FOREIGN KEY (user_id) REFERENCES profiles(user_id)

-- Table: profiles
TABLE profiles (
    id UUID,
    user_id UUID, -- References users(id)
    username TEXT,
    created_at TIMESTAMP WITH TIME ZONE
);

-- Relationships for profiles
-- FOREIGN KEY (user_id) REFERENCES users(id)

-- Table: stickers
TABLE stickers (
    id UUID,
    user_id UUID, -- References profiles(user_id)
    username TEXT,
    name TEXT
);

-- Relationships for stickers
-- FOREIGN KEY (user_id) REFERENCES profiles(user_id)

-- Table: tasks
TABLE tasks (
    id UUID,
    user_id UUID, -- References profiles(user_id)
    username TEXT,
    title TEXT,
    tier TEXT,
    spoons INTEGER,
    status TEXT,
    due_date DATE
);

-- Relationships for tasks
-- FOREIGN KEY (user_id) REFERENCES profiles(user_id)
