"use client";
//react deps
import React, { useEffect, useState } from "react";

import { CreateNewCard } from "@/app/components/ui/CreateNewCard";
//renderers
import { FormRenderer } from "@/app/components/renderers/FormRenderer";
import { CardRenderer } from "@/app/components/renderers/CardRenderer";

//mock data
import { initialCards } from "@/app/mock/cards";

//types
import { Card } from "@/app/types/Card";

//bars
import { ItemsBar } from "@/app/components/ItemsBar";
import { Sidebar } from "@/app/components/Sidebar";
import { ItemFilterBar } from "@/app/components/ItemFilterBar";

//utils
import { getMonthByNumber } from "@/app/utils/getMonthByNumber";
//popup menu that appears before creating a new card (for choosing the card type)
import { CardCreationPopup } from "@/app/components/CardCreationPopup";

export default function Dashboard() {
  const getTodayFormatted = () => {
    const today = new Date();
    const day = today.getDate();
    const dayString = day < 10 ? `0${day}` : day;
    const monthNumber = today.getMonth() + 1;
    let monthString = getMonthByNumber(monthNumber);
    monthString =
      monthString.length > 3 ? monthString.slice(0, 3) : monthString;

    return `${monthString} ${dayString}`;
  };

  const [creatingNewItem, setCreatingNewItem] = useState<boolean>(false);
  const [isFillingForm, setIsFillingForm] = useState<boolean>(false);
  const [cardType, setCardType] = useState<string>("");

  //New card props
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [url, setUrl] = useState<string>("");
  const [author, setAuthor] = useState<string>("");

  const [cards, setCards] = useState<Card[]>([...initialCards]);

  const [filteredCards, setFilteredCards] = useState<Card[]>(cards);
  const [query, setQuery] = useState<string>("");

  const [favCards, setFavCards] = useState<Card[]>([]);

  const [activeItem, setActiveItem] = useState<string>("All Boards");
  const [currentCards, setCurrentCards] = useState<Card[]>(cards);

  useEffect(() => {
    console.log("Current active item: ", activeItem);
    console.log("Filtered cards: ", filteredCards);
    console.log("Fav cards: ", favCards);
    setCurrentCards(
      activeItem.toLowerCase() === "all boards" ? filteredCards : favCards
    );
  }, [activeItem]);

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleAddCard = () => {
    setCards([
      ...cards,
      {
        title: title,
        description: description,
        tags: tags,
        type: cardType,
        url: url ?? "/",
      },
    ]);
  };

  const handleFavouriteCard = (card: Card) => {
    setFavCards([...favCards, card]);
  };

  const handleRemoveFavouriteCard = (card: Card) => {
    setFavCards(favCards.filter((c) => c.title !== card.title));
  };

  useEffect(() => {
    const q = query.toLowerCase();

    const result = cards.filter(
      (card) =>
        card.title.toLowerCase().includes(q) ||
        card.description.toLowerCase().includes(q) ||
        card.tags.some((tag: string) => tag.toLowerCase().includes(q))
    );

    setFilteredCards(result);
  }, [query, cards]);

  return (
    <div className="flex h-screen overflow-hidden font-sans relative">
      <Sidebar 
      activeItem={activeItem} 
      setActiveItem={setActiveItem}
       />

      <main className="flex-1 flex flex-col bg-(--color-surface-dark) min-w-0">
        <ItemsBar
          onPopupToggle={() => setCreatingNewItem(true)}
          query={query}
          onQuery={handleQueryChange}
        />
        <ItemFilterBar />
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pb-20">
            {currentCards.map((card, index) => {
              return (
                <CardRenderer
                  title={card.title}
                  description={card.description}
                  tags={card.tags}
                  key={index}
                  cardType={card.type}
                  date={getTodayFormatted()}
                  onFavourite={() => handleFavouriteCard(card)}
                  onUnfavourite={() => handleRemoveFavouriteCard(card)}
                  onCopyLink={() => {}}
                  onReport={() => {}}
                />
              );
            })}

            <CreateNewCard
              onClick={() => setCreatingNewItem(!creatingNewItem)}
            />
          </div>
        </div>
      </main>

      {creatingNewItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <CardCreationPopup
            cardType={cardType}
            setCardType={setCardType}
            onSelect={() => {
              setCreatingNewItem(false);
              setIsFillingForm(true);
            }}
            onClose={() => {
              setCreatingNewItem(false);
              setIsFillingForm(false);
            }}
          />
        </div>
      )}

      {isFillingForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
          <FormRenderer
            cardType={cardType}
            onClose={() => {
              setIsFillingForm(false);
            }}
            onSubmit={() => {
              handleAddCard();
              setTitle("");
              setDescription("");
              setTags([]);
              setIsFillingForm(false);
            }}
            title={title}
            description={description}
            tags={tags}
            url={url}
            author={author}
            setTitle={setTitle}
            setDescription={setDescription}
            setTags={setTags}
            setUrl={setUrl}
            setAuthor={setAuthor}
          />
        </div>
      )}
    </div>
  );
}
