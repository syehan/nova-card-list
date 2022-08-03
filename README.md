# Nova Card List

A Laravel Nova card extension from (https://github.com/abordage/nova-table-card)[https://github.com/abordage/nova-table-card] to make listing card for displaying current statistic of grouping.

<p style="text-align: center;" align="center">

</p>

## Requirements
- PHP 7.4 or higher
- Nova 4

## Installation

You can install the package via composer:

```bash
composer require syehan/nova-card-list
```

## Usage

To create a cards use the `artisan` command:

```bash
php artisan nova-card-list MyCardList
```
By default, all new cards will be placed in the `app/Nova/Cards` directory. 
Once your card list class has been generated, you're ready to customize it:

```php
<?php

namespace App\Nova\Cards;

use Syehan\CardList\CardList;

class MyCardList extends CardList
{
    /**
     * Name of the card.
     */
    public string $title = 'My Card List';

    /**
     * The width of the card (1/2, 1/3, 1/4 or full).
     */
    public $width = '1/3';

    /**
     * Array of table rows
     *
     * Required keys: title, viewUrl
     * Optional keys: subtitle, editUrl
     */
    public function rows(): array
    {
        $rows = [];

        /** for example */
        $models = \App\Models\User::limit(5)->get();
        foreach ($models as $model) {
            $rows[] = [
                'title' => $model->name,
                'subtitle' => $model->email,
                'viewUrl' => $this->getResourceUrl($model),
                'editUrl' => $this->getResourceUrl($model) . '/edit',
            ];
        }

        return $rows;
    }
}
```

Once you have defined a card, you are ready to attach it to a dashboard or resource. You should simply add it to the array of cards.

## Credits

- [Pavel Bychko](https://github.com/abordage) The man who inspired me to create this extension