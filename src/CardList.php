<?php

namespace Syehan\CardList;

use Illuminate\Database\Eloquent\Model;
use Laravel\Nova\Card;

class CardList extends Card
{
    /**
     * Name of the card (optional, remove if not needed)
     */
    public string $title = '';

    public array $rows = [];

    public function __construct()
    {
        parent::__construct('syehan-card-list');
        if (request()->is('nova-api/metrics/*')) {
            return;
        }

        $this->rows = $this->rows();
    }

    /**
     * Array of list rows
     *
     * Required keys: title, viewUrl
     * Optional keys: subtitle, editUrl
     */
    public function rows(): array
    {
        return [];
    }

    /**
     * @param Model $model
     * @return string
     */
    public function getResourceUrl(Model $model): string
    {
        return config('nova.path') . '/resources/' . str_replace('_', '-', $model->getTable()) . '/' . $model->getKey();
    }

    public function jsonSerialize(): array
    {
        return array_merge([
            'title' => $this->title,
            'rows' => $this->rows,
        ], parent::jsonSerialize());
    }
}
